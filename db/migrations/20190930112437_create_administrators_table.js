
exports.up = function(knex) {
  return knex.schema.createTable('administrators', (table) => {
    table.increments();
    table.string('username', 128).notNullable().unique();
    table.string('password', 256).notNullable();
    table.integer('event_id');
    table.foreign('event_id').references('id').inTable('events');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('administrators');
};
