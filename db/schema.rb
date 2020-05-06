# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_09_204026) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "battles_requests", force: :cascade do |t|
    t.integer "first_entity_id"
    t.integer "second_entity_id"
    t.string "type_battle"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "channels", force: :cascade do |t|
    t.string "channel"
    t.string "room"
    t.text "subscription", default: [], array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "chatrooms", force: :cascade do |t|
    t.string "name"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "private"
    t.boolean "public"
  end

  create_table "declarations", force: :cascade do |t|
    t.string "sender"
    t.string "receiver"
    t.decimal "points"
    t.datetime "start_at"
    t.datetime "end_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "timetable", default: [], array: true
    t.decimal "unanswered"
  end

  create_table "friends_links", force: :cascade do |t|
    t.integer "first_user_id"
    t.integer "second_user_id"
    t.datetime "first_user_mute"
    t.datetime "second_user_mute"
    t.boolean "first_user_accept"
    t.boolean "second_user_accept"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "friends_messages", force: :cascade do |t|
    t.integer "forwarder_id"
    t.integer "recipient_id"
    t.text "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "games", force: :cascade do |t|
    t.decimal "score_p1"
    t.decimal "score_p2"
    t.boolean "ended"
    t.string "game_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "player_1"
    t.string "player_2"
    t.string "guild_p1"
    t.string "guild_p2"
    t.integer "tournament_id"
    t.string "winner"
  end

  create_table "guilds", force: :cascade do |t|
    t.string "anagram"
    t.string "name"
    t.decimal "points"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "users_id"
    t.bigint "chatrooms_id"
    t.datetime "date"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["chatrooms_id"], name: "index_messages_on_chatrooms_id"
    t.index ["users_id"], name: "index_messages_on_users_id"
  end

  create_table "tournaments", force: :cascade do |t|
    t.boolean "main_tournament"
    t.datetime "start_at"
    t.datetime "end_at"
    t.decimal "level"
    t.decimal "prize"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.datetime "start_registration"
    t.datetime "end_registration"
    t.integer "winner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "login"
    t.string "pseudo"
    t.boolean "two_factor"
    t.decimal "victory"
    t.decimal "loss"
    t.string "status"
    t.string "banned"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "guild_id"
    t.string "guildStatus"
    t.boolean "admin"
    t.string "otp_secret_key"
    t.boolean "qrcode"
    t.boolean "connected"
    t.boolean "onsite"
    t.index ["guild_id"], name: "index_users_on_guild_id"
  end

  create_table "users_bans", force: :cascade do |t|
    t.integer "first_user_id"
    t.integer "second_user_id"
    t.boolean "first_user_block"
    t.boolean "second_user_block"
  end

  create_table "users_chatrooms", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "chatroom_id"
    t.datetime "ban_date"
    t.boolean "admin"
    t.boolean "owner"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["chatroom_id"], name: "index_users_chatrooms_on_chatroom_id"
    t.index ["user_id"], name: "index_users_chatrooms_on_user_id"
  end

  create_table "users_tournaments", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "tournament_id"
    t.decimal "level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tournament_id"], name: "index_users_tournaments_on_tournament_id"
    t.index ["user_id"], name: "index_users_tournaments_on_user_id"
  end

  create_table "wars", force: :cascade do |t|
    t.decimal "prize"
    t.decimal "player1_points"
    t.decimal "player2_points"
    t.string "player1"
    t.string "player2"
    t.decimal "max_unanswered"
    t.decimal "player1_unanswered"
    t.decimal "player2_unanswered"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "timetable", default: [], array: true
    t.datetime "start_at"
    t.datetime "end_at"
    t.boolean "ended"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "messages", "chatrooms", column: "chatrooms_id"
  add_foreign_key "messages", "users", column: "users_id"
  add_foreign_key "users", "guilds"
  add_foreign_key "users_chatrooms", "chatrooms"
  add_foreign_key "users_chatrooms", "users"
  add_foreign_key "users_tournaments", "tournaments"
  add_foreign_key "users_tournaments", "users"
end
