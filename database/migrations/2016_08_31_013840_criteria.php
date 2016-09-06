<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Criteria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
						//create criteria table
			if(Schema::hasTable('hierarchies')) {

      	Schema::create('criteria', function (Blueprint $table) {
      	      $table->increments('id');
							$table->string('name');
							$table->integer('parent_id')
										->unsigned()->nullable();
							$table->foreign('parent_id')
										->references('id')->on('criteria')
										->onDelete('cascade');
							$table->integer('hierarchy_id')
										->unsigned();
							$table->foreign('hierarchy_id')
										->references('id')->on('hierarchies')
										->onDelete('cascade');
				});
			}
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('criteria');
    }
}
