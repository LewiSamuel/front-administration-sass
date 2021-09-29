const apiDoc = {
  swagger: '2.0',
  basePath: '/v1',
  info: {
    title: '64 - API.',
    version: '1.0.0'
  },
  paths: {
    "/user/save": {
      post:{
        "tags": [
          "User"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "User not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/user/list": {
      get:{
        "tags": [
          "User"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "User not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/user/list/{idUser}": {
      get:{
        "tags": [
          "User"
        ],
        "parameters": [
          {
            "name": "idUser",
            "in": "path",
            "description": "ID of User to return",
            "required": true,
            "type": "integer",
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "User not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/user/search": {
      get:{
        "tags": [
          "User"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "User not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/user/update": {
      put:{
        "tags": [
          "User"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "User not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/user/update/{labelField}": {
      patch:{
        "tags": [
          "User"
        ],
        "parameters": [
          {
            "name": "labelField",
            "in": "path",
            "description": "label of field to return",
            "required": true,
            "type": "string",
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "User not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/user/delete": {
      delete:{
        "tags": [
          "User"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "User not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    
    "/post/save": {
      post:{
        "tags": [
          "Post"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "Post not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/post/list": {
      get:{
        "tags": [
          "Post"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "Post not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/post/list/{idPost}": {
      get:{
        "tags": [
          "Post"
        ],
        "parameters": [
          {
            "name": "idPost",
            "in": "path",
            "description": "ID of Post to return",
            "required": true,
            "type": "integer",
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "Post not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/post/search": {
      get:{
        "tags": [
          "Post"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "Post not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/post/update": {
      put:{
        "tags": [
          "Post"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "Post not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/post/update/{labelField}": {
      patch:{
        "tags": [
          "Post"
        ],
        "parameters": [
          {
            "name": "labelField",
            "in": "path",
            "description": "label of field to return",
            "required": true,
            "type": "string",
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "Post not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    "/post/delete": {
      delete:{
        "tags": [
          "Post"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "404": {
            "description": "Post not found",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
      },
    },
    
  },
  definitions: {User: {
      type: 'object',
      properties: {
        Name: {
            description: 'Name of User.',
            type: 'string',
            required: true
          },Email: {
            description: 'Email of User.',
            type: 'string',
            required: true
          },Password: {
            description: 'Password of User.',
            type: 'string',
            required: true
          },
      },

    },

    Post: {
      type: 'object',
      properties: {
        Titulo: {
            description: 'Titulo of Post.',
            type: 'string',
            required: false
          },Descr: {
            description: 'Descr of Post.',
            type: 'string',
            required: false
          },u: {
            description: 'u of Post.',
            type: 'number',
            required: false
          },
      },

    },

    
    ApiResponse: {
      type: "object",
      properties: {
        status: {
          type: "string"
        },
        message: {
          type: "string"
        },
        data: {
          type: "object"
        }
      }
    },
    
  }
};

export default apiDoc;