# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140725220115) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "problems", force: true do |t|
    t.string   "title",         null: false
    t.text     "description",   null: false
    t.text     "example_spec",  null: false
    t.text     "solution_spec", null: false
    t.integer  "submitter_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "rating"
    t.string   "category"
  end

  add_index "problems", ["submitter_id"], name: "index_problems_on_submitter_id", using: :btree
  add_index "problems", ["title"], name: "index_problems_on_title", unique: true, using: :btree

  create_table "solution_likes", force: true do |t|
    t.integer  "user_id",     null: false
    t.integer  "solution_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "solution_likes", ["solution_id"], name: "index_solution_likes_on_solution_id", using: :btree
  add_index "solution_likes", ["user_id"], name: "index_solution_likes_on_user_id", using: :btree

  create_table "solutions", force: true do |t|
    t.integer  "problem_id",   null: false
    t.integer  "submitter_id", null: false
    t.text     "content",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "solutions", ["problem_id"], name: "index_solutions_on_problem_id", using: :btree
  add_index "solutions", ["submitter_id"], name: "index_solutions_on_submitter_id", using: :btree

  create_table "users", force: true do |t|
    t.string "username",        null: false
    t.string "password_digest", null: false
    t.string "token",           null: false
  end

  add_index "users", ["token"], name: "index_users_on_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
