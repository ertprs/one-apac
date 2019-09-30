
exports.up = function(knex) {
  return knex.schema.alterTable('views', (table) => {
    table.string('description').notNullable().alter();
    table.integer('event_id').notNullable().alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('views', (table) => {
    table.integer('event_id').nullable().alter();
  });
};
