defmodule Demo.ReactAppController do
    import PhoenixGon.Controller

    use Demo.Web, :controller

    plug Demo.AuthAccessPipeline
        

    def index(conn, _params) do
        {_, current_user} = Demo.Guardian.Plug.current_resource(conn)
        |> Map.pop("token")

        csrf_token = get_csrf_token()

        conn
        |> put_gon(:current_user, current_user)
        |> put_gon(:csrf_token, csrf_token)
        |> render("index.html", layout: {Demo.LayoutView, "app_fullwidth.html"})
    end
end