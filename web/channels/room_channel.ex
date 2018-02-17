defmodule Demo.RoomChannel do
    use Demo.Web, :channel
    
    alias Demo.Presence

    def join("rooms:" <> channel_id, _params, socket) do
        channel_id = String.to_integer(channel_id)    
        resp = %{}

        send(self(), :after_join)
        {:ok, resp, assign(socket, :channel_id, channel_id)}
    end

    def handle_in(event, params, socket) do
        user = socket.assigns.user
        handle_in(event, params, user, socket)
    end

    def handle_in("new_message", _params, _user, socket) do
        {:reply, :ok, socket}
    end

    def handle_info(:after_join, socket) do
        push socket, "presence_state", Presence.list(socket)

        {:ok, _} = Presence.track(socket, socket.assigns.user["id"], %{
            user: socket.assigns.user,
            online_at: inspect(System.system_time(:seconds))
        })
        {:noreply, socket}
    end
end