// model/schema.js
import { appSchema, tableSchema } from '@nozbe/watermelondb'

const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'games',
      columns: [
        { name: 'match_num', type: 'number', isIndexed: true},
        { name: 'team_num', type: 'number', isIndexed: true},
        { name: 'team_pos', type: 'string', isIndexed: true },
        { name: 'data_string', type: 'string' },
      ]
    })
  ]
  
})

export default mySchema;