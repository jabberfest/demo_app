defmodule Demo.ChannelMessageView do
  use Demo.Web, :view

  def render("index.json", %{channel_message: channel_message}) do
    %{channel_messages: render_many(channel_message, Demo.ChannelMessageView, "channel_message.json")}
  end

  def render("show.json", %{channel_message: channel_message}) do
    render_one(channel_message, Demo.ChannelMessageView, "channel_message.json")
  end

  def render("channel_message.json", %{channel_message: channel_message}) do
    %{id: channel_message.id,
      name: channel_message.name,
      message: channel_message.message,
      avatar: channel_message.avatar}
  end
end
