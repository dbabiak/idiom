module ApplicationHelper
  # Make your life easier,
  # define the CSRF auth token in a helper
  # and put it in all the forms!
  def auth_token
    "<input
        type=\"hidden\"
        name=\"authenticity_token\"
        value=\"#{ form_authenticity_token }\">".html_safe
  end
  
  def rating_buttons(solution)
    "<form action='#{solution_likes_url}' method='POST'>
    
      #{auth_token}
      
      <input type=hidden 
          name='solution_like[solution_id]' 
          value='#{solution.id}'>
      
      <input type=hidden 
          name='solution_like[user_id]' 
          value='#{current_user.id}'>
      
      <input type='submit' value='Upvote'>
    </form>".html_safe
  end
  
  def format_solution(solution)
    "<br><pre>#{solution.content}</pre>".html_safe
  end
end
