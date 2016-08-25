<!-- Ramzi Abbyad -->
@extends ('layouts.app')
@section ('title')
{{ $title }}
@endsection
@section ('content')
<style>
iframe {
    border: none;
}
</style>
<iframe src="ahp.html" width="100%;" height="1000px;" seamless=""></iframe>
@endsection
