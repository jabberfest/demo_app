defmodule Demo.ChannelController do
    use Demo.Web, :controller


    alias Demo.Channel

    require IEx
    
    plug Demo.AuthAccessPipeline

    def create(conn, %{"channel" => channel_params}) do
        changeset = %Channel{}
        |> Channel.changeset(channel_params)

        case Repo.insert(changeset) do
            {:ok, channel} ->
                conn
                |> put_status(:created)
                |> render("show.json", channel: channel)
            {:error, changeset} ->
                conn
                |> put_status(:unprocessable_entity)
                |> render(Demo.ChangesetView, "error.json", changeset: changeset)
        end

    end
end