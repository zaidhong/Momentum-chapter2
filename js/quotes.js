const list = [
    {"author":"익명","message":"지식에 있어서는 많은 양보다 적을지라도 좋은 것을 선택함이 중요하다. 참으로 바르고 필요한 것을 아는 것이 좋다."},
    {"author":"로크","message":"우리들은 새김질하는 반추동물이 되어야 한다. 많은 양의 지식을 위 속에 집어넣는 것으로 만족해서는 안 된다. 만일 우리들이 좋은 지식을 잘 소화하여 자기 것으로 만들지 않는다면 그 책들은 우리들에게 아무런 힘과 영양분이 되지 못할 것이다."},
    {"author":"토로우","message":"좋은 책은 무슨 일이 있더라도 꼭 읽어라. 그렇지 않으면 끝내 읽지 못할지도 모른다."},
    {"author":"쇼펜하우어","message":"독서는 자기의 사상의 원천이 메말랐을 때에만 하라. 사상의 메마름 은 가장 지혜로운 사람들에게도 종종 일어나는 현상이다. 그러나 아직 확고하지 못한 자기 사상을 무익한 책 때문에 놓쳐 버리는 경우도 있다. 그것은 정신에 죄를 범하게 하는 것과 같다."},
    {"author":"익명","message":"육체에 대한 독약과 정신에 대한 독약의 차이는 다음과 같다. 즉, 육체에 대한 독약은 대개 그 맛이 불쾌한 것이지마는 신문이나 악서 속에 담겨있는 정신에 대한 독약은 아주 매혹적이며 그럴수록 그것은 더욱 사악한 것이다."},
    {"author":"익명","message":"가장 어리석은 미신의 하나는, 과학자들이 인간은 신앙이 없이도 살아갈 수 있다고 잘못 믿고 있는 일이다."},
    {"author":"맛치니","message":"어느 시대에서나 인간은 항상 스스로의 생존의 최초의 원인이나 최후의 목적을 알려 하고 어떠한 설명을 듣고자 원했다. 그러므로 종교 는 인간을 인도하는 공통된 대진리를 가르쳐 주는 것이라고 해명한다. 종교는 결국 하니의 공통된 근원, 공통된 인간 문제, 공통된 궁극적 목적을 가지고 있는 모든 인간을 형제와 같이 결합시키는 그 연관성을 밝혀 주기 위하여 나타난 것이다."},
    {"author":"익명","message":"진실한 종교란 인간의 내면에 자리한 영원을 추구하는 마음과 무한 한 세계와의 관계, 즉 인간 생활을 무한한 것과 결합시켜서 인간의 행 위를 인도하는 그러한 관계이다."},
    {"author":"익명","message":"모든 종교의 본질은 무엇 때문에 내가 생존하고 있으며 나를 에워 싸고 있는 무궁한 세계와는 어떤 관계가 있는가? 하는 질문에 대한 분명한 대답을 제시함으로써 성립되어진다. 가장 고차원적인 것에서 부터 가장 어리석은 것에 이르기까지 무릇 어떠한 종교일지라도 그 근 본은 인간을 에워싸고 있는 세계에 대한 또는 인간의 제일원인에 대 한 관계의 수립을 가지고 있지 않음이 없다."},
    {"author":"칸트","message":"신의 계시(啓示)에 관한 특수한 연구 내용이 아니라 -- 왜냐하면 그것은 신학(神學)에 속한 것이니까-- 신의 명령으로서의 우리들의 보편적인 의무의 내용이 종교를 이루는 것이다."}
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const selectQuoteIdx = Math.floor(Math.random() * list.length)
const todayQuote = list[selectQuoteIdx]

quote.innerText = todayQuote.message
author.innerText = `- ${todayQuote.author} -`