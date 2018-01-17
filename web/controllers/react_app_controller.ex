require IEx;

defmodule Demo.ReactAppController do
    use Demo.Web, :controller

    plug Demo.AuthAccessPipeline

    def index(conn, _params) do

        #IEx.pry

        render conn, "index.html", current_user: get_session(conn, :current_user)
    end
end