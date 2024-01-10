import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        idUser : 1,
        name : 'Alan Baker',
        mobileNumber : '00',
        email : 'alanb@msggroup.com',
        username : 'alanbkr',
        ADM : true,
        PM : true,
        TM : false,
        DEV : false,
        TEST : false

    })
      server.create("user",
      {
          idUser : 2,
          name : 'Wake Brook',
          mobileNumber : '00',
          email : 'wakeb@msggroup.com',
          username : 'wakebrk',
          ADM : false,
          PM : false,
          TM : true,
          DEV : false,
          TEST : false
      })
      server.create("user",
      {
        idUser : 3,
          name : 'Super Brother',
          mobileNumber : '00',
          email : 'superbrt@msggroup.com',
          username : 'superb',
          ADM : false,
          PM : false,
          TM : false,
          DEV : true,
          TEST : true
      })
    },

    routes() {
      this.namespace = "api"

      this.get("/inspectUsers", (schema) => {
        return schema.users.all()
      })

      this.get("inspectUsers/:username", (schema, request) => {
        const usernameToLookFor = request.params.username
        return schema.users.findBy({username: usernameToLookFor})
      })

      this.post('createUser', (schema, request) => {
        console.log(request)
        const attributes = JSON.parse(request.requestBody);
        return schema.users.create(attributes);
      });
    },
  })

  return server
}