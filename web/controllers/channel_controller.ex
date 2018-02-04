defmodule Demo.ChannelController do
    use Demo.Web, :controller

    require IEx
    
    plug Demo.AuthAccessPipeline

    def create(conn, _params) do
        IEx.pry
    end
end