defmodule Demo.ChannelView do
    use Demo.Web, :view
  
    def render("index.json", %{channel: channel}) do
      %{data: render_many(channel, Demo.ChannelView, "channel.json")}
    end
  
    def render("show.json", %{channel: channel}) do
      %{data: render_one(channel, Demo.ChannelView, "channel.json")}
    end
  
    def render("channel.json", %{channel: channel}) do
      %{id: channel.id,
        name: channel.name}
    end
  end
  