defmodule Demo.RoomListChannel do
    use Demo.Web, :channel

    def join("room-list:lobby", _params, socket) do  
        {:ok, socket}
    end

    def handle_in(event, params, socket) do
        user = socket.assigns.user
        handle_in(event, params, user, socket)
    end

    def handle_in("new_message", _params, _user, socket) do
        {:reply, :ok, socket}
    end
end