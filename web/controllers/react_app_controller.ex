defmodule Demo.ReactAppController do
    import PhoenixGon.Controller
    
    use Demo.Web, :controller

    plug Demo.AuthAccessPipeline
    

    def index(conn, _params) do
        current_user = get_session(conn, :current_user)
        
        conn
        |> put_gon(:current_user, current_user)
        |> render("index.html", layout: {Demo.LayoutView, "app_fullwidth.html"})
    end
end