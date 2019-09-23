
exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
    table.integer('event_id');
    table.foreign('event_id').references('id').inTable('events');
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('event_id');
  });
};
