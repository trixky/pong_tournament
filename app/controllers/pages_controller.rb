class PagesController < ApplicationController
  def index
    @data = cookies.encrypted[:data]
  end
end
