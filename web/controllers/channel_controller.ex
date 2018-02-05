defmodule Demo.ChannelController do
    use Demo.Web, :controller


    alias Demo.Channel

    require IEx
    
    plug Demo.AuthAccessPipeline

    def index(conn, _params) do
        channel = Repo.all(Channel)
        render(conn, "index.json", channel: channel)
    end


    def create(conn, %{"channel" => channel_params}) do
        changeset = Channel.changeset(%Channel{}, channel_params)
    
        case Repo.insert(changeset) do
          {:ok, channel} ->
            conn
            |> put_status(:created)
            |> put_resp_header("location", channel_path(conn, :show, channel))
            |> render("show.json", channel: channel)
          {:error, changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> render(Demo.ChangesetView, "error.json", changeset: changeset)
        end
    end

    def show(conn, %{"id" => id}) do
        channel = Repo.get!(Channel, id)
        render(conn, "show.json", channel: channel)
    end

end