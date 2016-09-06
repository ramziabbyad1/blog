<?php

use Illuminate\Database\Seeder;
use App\seedhelpers\DefaultDataProvider;

class DefaultComparisonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
		{
			$comparisons = DefaultDataProvider::getInstance();
			
			DB::table('comparisons')->insert($comparisons->getComparisons()); 
    }
}
