module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user_id
    identified_by :current_user

    def connect
      self.current_user_id = JSON.parse(cookies.encrypted[:data])["id"]
    end
  end
end
