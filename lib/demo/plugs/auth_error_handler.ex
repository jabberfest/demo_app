defmodule Demo.AuthErrorHandler do
    use Demo.Web, :controller
  
    def auth_error(conn, {type, reason}, _opts) do
        conn
        |> redirect(to: "/login")
    end
  end