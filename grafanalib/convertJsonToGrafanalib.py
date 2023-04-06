import json
from grafanalib.core import Dashboard, Graph, Row, Time, YAxes, YAxis, SingleStat

def convert_panel(panel_json):
    if panel_json['type'] == 'graph':
        return Graph(
            title=panel_json['title'],
            dataSource=panel_json['datasource'],
            targets=panel_json['targets'],
            yAxes=YAxes(
                left=YAxis(format=panel_json['yaxes'][0]['format']),
                right=YAxis(format=panel_json['yaxes'][1]['format']),
            ),
        )
    elif panel_json['type'] == 'singlestat':
        return SingleStat(
            title=panel_json['title'],
            dataSource=panel_json['datasource'],
            targets=panel_json['targets'],
            valueFontSize=panel_json.get('valueFontSize', '80%'),
            postfix=panel_json.get('postfix', ''),
            # Add more properties as needed
        )
    else:
        # Implement conversions for other panel types here
        raise NotImplementedError(f"Unsupported panel type: {panel_json['type']}")



def convert_row(row_json):
    return Row(panels=[convert_panel(panel_json) for panel_json in row_json['panels']])

def convert_dashboard(dashboard_json):
    time_range = dashboard_json.get("time", {"from": "now-6h", "to": "now"})

    if "rows" in dashboard_json:
        return Dashboard(
            title=dashboard_json["title"],
            rows=[convert_row(row_json) for row_json in dashboard_json["rows"]],
            time=Time(start=time_range["from"], end=time_range["to"]),
        )
    elif "panels" in dashboard_json:
        return Dashboard(
            title=dashboard_json["title"],
            panels=[convert_panel(panel_json) for panel_json in dashboard_json["panels"]],
            time=Time(start=time_range["from"], end=time_range["to"]),
        )
    else:
        raise ValueError("Unsupported dashboard format. No 'rows' or 'panels' found.")


def main():
    input_file = 'grafana_dashboard.json'
    output_file = 'converted_dashboard.py'

    with open(input_file, 'r') as file:
        dashboard_json = json.load(file)

    dashboard = convert_dashboard(dashboard_json)

    with open(output_file, 'w') as file:
        file.write(str(dashboard))

if __name__ == "__main__":
    main()


# N.B: It is not work for every dashboard while converting again into json