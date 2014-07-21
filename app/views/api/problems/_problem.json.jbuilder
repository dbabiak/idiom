json.(problem, :id, :title, :description, :created_at, :updated_at)
solution_cases ||= nil
unless solution_cases.nil?
  json.solution_cases(solution_cases) do |solution_case|
    json.partial!("api/solution_cases/solution_case", solution_case: solution_case)
  end
end
