<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Hierarchies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
		{
      Schema::create('hierarchies', function (Blueprint $table) {
            $table->increments('id');
						$table->string('name');
						$table->integer('user_id')
									->unsigned()->default(1);
						$table->foreign('user_id')
									->references('id')->on('users')
									->ondelete('cascade');

			});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('hierarchies');
    }
}
