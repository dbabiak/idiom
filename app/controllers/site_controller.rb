class SiteController < ApplicationController
  def index
    @problems = Problem.all
    render 'problems/home'
    #wtf? don't we have to do something with json?
  end
end
