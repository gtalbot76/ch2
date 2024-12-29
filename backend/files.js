import { writeFileSync, readFileSync } from 'node:fs'

const users = [
  { name: 'Adam Ondra', email: 'adam.ondra@climb.ing' },
  { name: 'Bug', email: 'bug@cat.com' },
]
const usersJson = JSON.stringify(users)

writeFileSync('users.json', usersJson)

const readUsersJson = readFileSync('users.json')
const readUsers = JSON.parse(readUsersJson)

console.log(readUsers[1].name)
