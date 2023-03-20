// const redis = require('redis')

// const client = redis.createClient({
//     url: 'redis://redis:6379'
//   })

// await client.connect()

// client.set("name", "Flavio")
// client.set("age", 37)

// const value = await client.get("name")

const redis = require('redis')

const client = redis.createClient({
  url: 'redis://redis:6379'
})

async function main() {
  await client.connect()

  client.set("name", "Flavio")
  client.set("age", 37)

  const value = await client.get("name")
  console.log(value)
}

main()