// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { field, text } from '@nozbe/watermelondb/decorators'

class Game extends Model {
  static table = 'games'

  @text('match_num') matchNum
  @text('team_num') teamNum
  @text('team_pos') teamPos
  @text('match_num') matchNum
}   