defmodule Demo.RoomChannel do
    use Demo.Web, :channel

    def join("rooms:" <> channel_id, _params, socket) do
        channel_id = String.to_integer(channel_id)    
        resp = %{}
        {:ok, resp, assign(socket, :channel_id, channel_id)}
    end

    def handle_in(event, params, socket) do
        user = socket.assigns.user
        handle_in(event, params, user, socket)
    end

    def handle_in("new_message", _params, _user, socket) do
        {:reply, :ok, socket}
    end

end