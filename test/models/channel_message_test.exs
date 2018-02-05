defmodule Demo.ChannelMessageTest do
  use Demo.ModelCase

  alias Demo.ChannelMessage

  @valid_attrs %{message: "some content", name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = ChannelMessage.changeset(%ChannelMessage{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = ChannelMessage.changeset(%ChannelMessage{}, @invalid_attrs)
    refute changeset.valid?
  end
end
