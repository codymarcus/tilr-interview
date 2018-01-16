const fs = require('fs')

function prompt(question, callback) {
  var stdin = process.stdin,
    stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data', function (data) {
    callback(data.toString().trim());
  });
}

const db = {
  dialect: 'mysql'
}

const ask = () => {
  console.log('Database setup (make sure you have a MySQL DB for this)')
  prompt('host: ', host => {
    db.host = host
    prompt('username: ', username => {
      db.username = username
      prompt('password: ', password => {
        db.password = password
        prompt('database: ', database => {
          db.database = database
          fs.writeFile('./config/config.json', JSON.stringify(db), 'utf8', function (err) {
            if (err) {
              console.log(err);
              process.exit(1)
            }
            console.log("DB config created");
            process.exit()
          })
        })
      })
    })
  })
}

if (!fs.existsSync('./config')) {
  fs.mkdirSync('./config');
}

if (!fs.existsSync('./config/config.json')) {
  ask()
}
