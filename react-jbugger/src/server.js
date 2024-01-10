import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      bug: Model,
    },

    seeds(server) {
      server.create("user", {
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
          name : 'Super Brother',
          mobileNumber : '00',
          email : 'superbrt@msggroup.com',
          username : 'superb',
          ADM : false,
          PM : false,
          TM : false,
          DEV : true,
          TEST : true
      });
      server.create("bug", {
        title: 'Sample Bug',
        description: 'This is a sample bug',
        version: '1.0',
        targetDate: '2022-12-31',
        severity: 'High',
        status: 'OPEN',
        fixedVersion: '',
      });
    },

    routes() {
      this.namespace = "api";

      this.post("/auth/login", (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody);
        const user = schema.users.findBy({ username, password });

        if (user) {
          return {
            user: {
              id: user.id,
              name: user.name,
              username: user.username,
            },
            token: "your-auth-token", // Replace with your authentication token
          };
        } else {
          return { error: "Invalid username or password" };
        }
      });

      this.get("/inspectUsers", (schema) => {
        return schema.users.all();
      });
      this.get("/inspectBugs", (schema) => {
        return schema.bugs.all();
      });
    },
  });

  return server;
}