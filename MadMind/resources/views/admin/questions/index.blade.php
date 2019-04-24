<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Questions</h1>
    <ul>
    @foreach ($questions as $questions)
        <li>
            <a href="{{ url('admin/questions') }}/{{ $questions->id }}">
                {{ $questions->question }}
            </a>
        </li>
    @endforeach
    </ul>
    <li>
        <a href="{{ url('admin/questions/create') }}">Create a new question</a>
    </li>
</body>
</html>