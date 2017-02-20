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

ActiveRecord::Schema.define(version: 20170219212818) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string   "name",               null: false
    t.string   "user_id"
    t.string   "url"
    t.string   "street",             null: false
    t.string   "city",               null: false
    t.string   "state",              null: false
    t.string   "zip",                null: false
    t.string   "phone",              null: false
    t.float    "latitude",           null: false
    t.float    "longitude",          null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["url"], name: "index_businesses_on_url", unique: true, using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",            null: false
    t.integer  "business_id",        null: false
    t.text     "review",             null: false
    t.integer  "rating",             null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "business_id", null: false
    t.integer  "tag_id",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "tags", force: :cascade do |t|
    t.boolean  "tag"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag"], name: "index_tags_on_tag", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.string   "email",              null: false
    t.string   "f_name",             null: false
    t.string   "l_name",             null: false
    t.string   "zip",                null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
