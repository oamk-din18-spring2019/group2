<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Create a new project</h1>

    <form method="POST" action="/questions">
        {{ csrf_field() }}
        
        <div>
            <input type="text" name="categoryTitle" placeholder="Category Title" value="{{ old('categoryTitle') }}" >
        </div>
        <div>
            <input name="question" placeholder="Question" >{{ old('question') }}
        </div>
        <div>
            <input name="correctAnswer" placeholder="Correct answer" >{{ old('correctAnswer') }}
        </div>
        <div>
            <input name="option1" placeholder="option 1" >{{ old('option1') }}
        </div>
        <div>
            <input name="option2" placeholder="option 2" >{{ old('option2') }}
        </div>
        <div>
            <input name="option3" placeholder="option 3" >{{ old('option3') }}
        </div>
        <div>
            <button type="submit">Create question</button>
        </div>
        @if ($errors->any())
            <div class="notification">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
    </form>
</body>
</html>