defmodule Demo.ChannelMessageControllerTest do
  use Demo.ConnCase

  alias Demo.ChannelMessage
  @valid_attrs %{message: "some content", name: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, channel_message_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    channel_message = Repo.insert! %ChannelMessage{}
    conn = get conn, channel_message_path(conn, :show, channel_message)
    assert json_response(conn, 200)["data"] == %{"id" => channel_message.id,
      "name" => channel_message.name,
      "message" => channel_message.message}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, channel_message_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, channel_message_path(conn, :create), channel_message: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(ChannelMessage, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, channel_message_path(conn, :create), channel_message: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    channel_message = Repo.insert! %ChannelMessage{}
    conn = put conn, channel_message_path(conn, :update, channel_message), channel_message: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(ChannelMessage, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    channel_message = Repo.insert! %ChannelMessage{}
    conn = put conn, channel_message_path(conn, :update, channel_message), channel_message: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    channel_message = Repo.insert! %ChannelMessage{}
    conn = delete conn, channel_message_path(conn, :delete, channel_message)
    assert response(conn, 204)
    refute Repo.get(ChannelMessage, channel_message.id)
  end
end
