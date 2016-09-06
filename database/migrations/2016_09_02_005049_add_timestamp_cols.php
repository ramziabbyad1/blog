<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTimestampCols extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
			Schema::table('hierarchies', function($table){
						$table->timestamps();
			});
			Schema::table('criteria', function($table){
						$table->timestamps();
			});
			Schema::table('comparisons', function($table){
						$table->timestamps();
			});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
			Schema::table('hierarchies', function($table){
						$table->dropTimestamps();
			});
			Schema::table('criteria', function($table){
						$table->dropTimestamps();
			});
			Schema::table('comparisons', function($table){
						$table->dropTimestamps();
			});
    }
}
