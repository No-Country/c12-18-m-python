# Vanity Reserve - Backend


End point /user/createuser/ POST

body-params: {
    username | str,
    email | str,
    password | str,
    first_name  | str,
    last_name | str,
}
response-200: {
    username | str,
    email | str,
    first_name  | str,
    last_name | str,
    admin | bool
}

End point user/auth/ GET 

query-param: {
    username | str,
    password | str,
}

response-200: {
    username | str,
    email | str,
    first_name  | str,
    last_name | str,
    admin | bool
}