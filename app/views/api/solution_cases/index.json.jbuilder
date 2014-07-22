json.array!(@solution_cases) do |solution_case|
  json.partial!("solution_case", solution_case: solution_case)
end
