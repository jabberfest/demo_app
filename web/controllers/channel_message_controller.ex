defmodule Demo.ChannelMessageController do
  use Demo.Web, :controller

  alias Demo.ChannelMessage

  def index(conn, _params) do
    channel_message = Repo.all(ChannelMessage)
    render(conn, "index.json", channel_message: channel_message)
  end

  def create(conn, %{"channel_message" => channel_message_params}) do
    changeset = ChannelMessage.changeset(%ChannelMessage{}, channel_message_params)

    case Repo.insert(changeset) do
      {:ok, channel_message} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", channel_message_path(conn, :show, channel_message))
        |> render("show.json", channel_message: channel_message)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Demo.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    channel_message = Repo.get!(ChannelMessage, id)
    render(conn, "show.json", channel_message: channel_message)
  end

  def update(conn, %{"id" => id, "channel_message" => channel_message_params}) do
    channel_message = Repo.get!(ChannelMessage, id)
    changeset = ChannelMessage.changeset(channel_message, channel_message_params)

    case Repo.update(changeset) do
      {:ok, channel_message} ->
        render(conn, "show.json", channel_message: channel_message)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Demo.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    channel_message = Repo.get!(ChannelMessage, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(channel_message)

    send_resp(conn, :no_content, "")
  end
end