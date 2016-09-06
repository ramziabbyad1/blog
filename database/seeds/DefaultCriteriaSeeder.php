<?php

use Illuminate\Database\Seeder;
use App\seedhelpers\DefaultDataProvider;

class DefaultCriteriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
			$provider = DefaultDataProvider::getInstance();
			DB::table('criteria')->insert($provider->getCriteria()); 
    }
}
