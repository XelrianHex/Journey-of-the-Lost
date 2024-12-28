MARKDOWN NOTES:
Headers:

# Header 1

## Header 2

### Header 3

all the way to Header 6.

Text Formatting:
**bold** or **bold**
_italic_ or _italic_
**_bold and italic_**
~~strikethrough~~

Lists:
Unordered List:

- Item 1

* Item 2
  - Sub-item
    (could use any of the bullet styles)

Ordered List:

1. First Item
2. Second Item
3. Sub-item

Links:
Inline Link:
[GitHub](https://github.com)

Reference Link: Use labels for URLs
[GitHub][1]

[1]: https://github.com

Images:
Inline Image: ![alt text](image URL)
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

Reference Image:
![Logo][logo]

[logo]: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png

Blockquotes:

> This is a blockquote.

Code:
Inline Code: Enclose code in backticks
Use the `git pull` command.

Code Block: Use triple backticks or indent with 4 spaces
`print("Hello, World!")`

Tables: Create tables using | and -
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1 | Data | More |
| Row 2 | More | Data |

## Horizontal Line: Use ---, \*\*\* or \_\_\_

Task Lists: Use -[] for unchecked items and -[x] for checked items -[x] Completed task -[ ] Incomplete task

Emojis: use :emoji_name: (Github supports a wide range)
:smile: :rocket: :tada:

Special Formatting:
Escape Characters: Use a backslash to escape Markdown symbols
\*This text will not be italic\*

Collapsible Sections: (GitHub specific)

<details>
<summary>Click to expand!</summary>
This is the hidden content.
</details>

Git Commands:
Create Branch:
git checkout -b type of addition/addition name

Add files to commit:
git add .

commit files:
git commit -m "commit message goes here"

push to origin:
git push origin branch name
