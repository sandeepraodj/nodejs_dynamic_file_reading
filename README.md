# Reading files dynamically
Reading files dynamically when module name and screen name is passed

## Starting Application

Clone Repository

```bash
$ git clone https://github.com/sandeepraodj/nodejs_dynamic_file_reading.git
$ cd nodejs_dynamic_file_reading
```

Install dependencies:

```bash
$ npm install
```

Start the server:

```bash
$ npm start
```

# curl

```bash
curl --location --request GET 'localhost:8000/get_meta_data?module_name=finance&screen_name=test' \
--header 'Cookie: _csrf=1EeQyXu5s5ET70e1EyRzof82' \
--data-raw ''
```
