const words = [
  {word: 'take on', meaning: '引き受ける'},
  {word: 'menagerie', meaning: '動物の集団'},
  {word: 'blast X away', meaning: 'Xを吹き飛ばす'},
  {word: 'strip X from Y', meaning: 'XをYから引き剥がす'},
  {word: 'mutate', meaning: '変化する, 突然変異'},
  {word: 'humongous', meaning: '巨大な、extremely large'},
  {word: 'masses', meaning: '集団'},
  {word: 'polyps', meaning: '突起物、イソギンチャク'},
  {word: 'upwards', meaning: '上に、方角'},
  {word: 'intimately', meaning: '密接に、親密に'},
  {word: 'ridge', meaning: 'long narrow hilltop'},
  {word: 'gill', meaning: 'エラ'},
  {word: 'affinities, affinity', meaning: '親和性'},
  {word: 'archeocyte', meaning: '原子細胞'},
  {word: 'Held up', meaning: '持ちこたえる／有効である'},
  {word: 'Contaminated', meaning: '汚染された'},
  {word: 'fodder', meaning: '飼料'},
  {word: 'disturbing', meaning: '不穏な'},
  {word: 'bode', meaning: '予兆となる'},
  {word: 'encroach', meaning: '侵入する'},
  {word: 'abrasion', meaning: '摩耗'},
  {word: 'wears', meaning: 'すり減る'},
  {word: 'lush', meaning: '青々とした、豊かな'},
  {word: 'equids', meaning: 'ウマ科の動物（馬、ロバ、シマウマなど）'},
  {word: 'secular', meaning: '世俗的な'},
  {word: 'wadi', meaning: 'ワジ（乾季に乾くが雨季に水が流れる谷や川床）'},
  {word: 'alluvial', meaning: '沖積の（川が運んだ土砂が堆積してできた）'},
  {word: 'conduit', meaning: '経路、伝達手段'},
  {word: 'artery', meaning: '主要道路、幹線（動脈という意味もある）'},
  {word: 'survey', meaning: '調査、測量（する）'},
  {word: 'drill core', meaning: '掘削芯'},
  {word: 'constriction', meaning: '狭窄、締め付け'},
  {word: 'junction', meaning: '接続点、交差点'},
  {word: 'pasturage', meaning: '牧草地'},
  {word: 'droplets', meaning: '雫、小滴'},
  {word: 'wear off', meaning: '（効果などが）なくなる'},
  {word: 'harness', meaning: '活用する'},
  {word: 'come into existence', meaning: '誕生する'},
  {word: 'supplant', meaning: '取って代わる、地位を奪う'},
  {word: 'scrap', meaning: '計画を廃止する'},
  {word: 'blast', meaning: '爆破する、激しく非難する'},
  {word: 'take up the slack', meaning: '不足分を補う'},
  {word: 'pass to', meaning: '〜へ引き継ぐ'},
  {word: 'strain', meaning: '負荷をかける'},
  {word: 'from the picture', meaning: 'この状況から'},
  {word: 'internal affairs', meaning: '内部管理'},
  {word: 'primate', meaning: '霊長類'},
  {word: 'ingest', meaning: '摂取する'},
  {word: 'incremental', meaning: '増加している、増加の'},
  {word: 'extent to which', meaning: 'どの程度'},
  {word: 'sneeringly', meaning: '嘲笑うように'},
  {word: 'Hence', meaning: 'したがって'},
  {word: 'it isn\'t every day that', meaning: 'それは滅多にない'},
  {word: 'utilitarian', meaning: '実用的な'},
  {word: 'mundane', meaning: '平凡な・日常的な'},
  {word: 'gloss', meaning: '光沢・つや'},
  {word: 'statuettes', meaning: '小さな彫像'},
  {word: 'A bound B to C', meaning: 'AがBとCを結びつけた'},
  {word: 'pretensions', meaning: '誇示'},
  {word: 'taste', meaning: '趣味、センス'},
  {word: 'mosaics', meaning: '「mosaic（モザイク）」の複数形 で、小さな石やタイルを組み合わせた装飾芸術を指す'},
  {word: 'influx', meaning: '流入'},
  {word: 'spring', meaning: '湧水、sacred-springで神聖な湧水'},
  {word: 'stylistically', meaning: '様式的に'},
  {word: 'owe A to B', meaning: 'AはBのおかげである。'},
  {word: 'amass', meaning: '集める、蓄積する'},
  {word: 'fortified', meaning: '要塞化された / 防御を強化された'},
  {word: 'sheer', meaning: '（規模や大きさが）とてつもない / 圧倒的な'},
  {word: 'dominance', meaning: '支配 / 優位性'},
  {word: 'epitomized', meaning: '典型的に表した / 体現した'},
  {word: 'imperial', meaning: '帝国の / 皇帝の'},
  {word: 'supremacy', meaning: '至高の地位 / 最高権力'},
  {word: 'accentuate', meaning: '強調する'},
  {word: 'unyielding', meaning: '頑固な / 屈しない / 断固とした'},
  {word: 'castes', meaning: 'カースト、階級'},
  {word: 'mated', meaning: '交尾した / つがいになった'},
  {word: 'consort', meaning: '配偶者 / 付き合う'},
  {word: 'burrows', meaning: '巣'},
  {word: 'desiccated', meaning: '乾燥した'},
  {word: 'optimum', meaning: '最良の'},
  {word: 'subterranean', meaning: '地下の'},
  {word: 'saliva', meaning: '唾液'},
  {word: 'ridges', meaning: '隆起、屋根'},
  {word: 'protrude', meaning: '外へ突き出る'},
  {word: 'cellar', meaning: '地下室'},
  {word: 'attic', meaning: '屋根裏'},
  {word: 'lay the foundation for ～', meaning: '~の基盤を作る'},
  {word: 'clumsy', meaning: '不器用'},
  {word: 'bulky', meaning: 'かさばる'},
  {word: 'dear to ～', meaning: '~にとって大切な'},
  {word: 'set ～ ablaze', meaning: '火をつける'},
  {word: 'millennia', meaning: '何千年'},
  {word: 'lasted down to ～', meaning: '~まで存続する'},
  {word: 'the common era', meaning: '西暦'},
  {word: 'yielding to ～', meaning: '~にとって変わる'},
  {word: 'once and for all', meaning: '完全に・決定的に'},
  {word: 'incised', meaning: '刻み込まれた'},
  {word: 'stylus', meaning: '筆記ペン'},
  {word: 'dub', meaning: '名付ける'},
  {word: 'cuneiform', meaning: '楔形文字'},
  {word: 'hallmark', meaning: '特徴・性質'},
  {word: 'scribes', meaning: '筆記者'},
  {word: 'multitudinous', meaning: '非常に多い'},
  {word: 'batches', meaning: '一まとまり'},
  {word: 'mines', meaning: '鉱山'},
  {word: 'minting', meaning: '造幣'},
  {word: 'multiply', meaning: '増加する'},
  {word: 'courier', meaning: '運び屋'},
  {word: 'finished products', meaning: '加工品・製品'},
  {word: 'exempt A from B', meaning: 'BからAを免除する'},
  {word: 'quarters', meaning: '住居区'},
  {word: 'add up to ～', meaning: '最終的に~となる'},
  {word: 'aristocratic', meaning: '貴族の'},
  {word: 'Even so', meaning: 'それでも'},
  {word: 'altogether', meaning: '全体で'},
  {word: 'terrific', meaning: '素晴らしい！！、ものすごい'},
  {word: 'culvert', meaning: '暗渠'},
  {word: 'pass up', meaning: '見送る'},
  {word: 'wax', meaning: 'ろう、ツルツル滑る'},
  {word: 'stomates', meaning: '気孔'},
  {word: 'keep ~ from ~', meaning: '～が…するのを防ぐ'},
  {word: 'reinforce a point that ~', meaning: '~という点を強調する'},
  {word: 'be cast as ~', meaning: '~と位置付けられる'},
  {word: 'come to ~', meaning: '~するようになる'},
  {word: 'be destined to ~', meaning: '~する運命にある'},
  {word: 'have to do with ~', meaning: '~と関係がある'},
  {word: 'solitary', meaning: '孤独な'},
  {word: 'the unknown', meaning: '未知な世界'},
  {word: 'faithfully', meaning: '忠実に'},
  {word: 'brainchild', meaning: '発案'},
  {word: 'ballet', meaning: 'バレエ'},
  {word: 'there goes', meaning: 'なくなる'},
  {word: 'singular', meaning: '単数系'},
  {word: 'mammalian', meaning: '哺乳類の'},
  {word: 'swept', meaning: '掃く、吹き払う、押し流す'},
  {word: 'somewhat', meaning: '多少、やや'},
  {word: 'peopling', meaning: '人々の移住・定住'},
  {word: 'paleoecologists', meaning: '古生態学者'},
  {word: 'dune', meaning: '砂丘'},
  {word: 'pollen', meaning: '花粉'},
  {word: 'gamble', meaning: 'ギャンブル'},
  {word: 'be bound to ~', meaning: '~するのはほぼ確実である'},
  {word: 'petals', meaning: '花びら'},
  {word: 'dispense with', meaning: 'なしで済ませる'},
  {word: 'impediment to ~', meaning: '～への障害'},
  {word: 'deciduous', meaning: '落葉樹（対: 常緑樹）'},
  {word: 'be bare of', meaning: '～を欠いている（一時的）'},
  {word: 'gusty', meaning: '突風的な、突発的な'},
  {word: 'shed', meaning: '放出する'},
  {word: 'snatched', meaning: 'ひったくる、奪い取る'},
  {word: 'vagaries', meaning: '予測不可能な変化、気まぐれ'},
  {word: 'two-edged sword', meaning: '諸刃の剣'},
  {word: 'whisked', meaning: '素早く運ぶ、払いのける'},
  {word: 'trapped', meaning: '閉じ込められる、捕まる'},
  {word: 'turbulence', meaning: '乱気流、激しい動き'},
  {word: 'stigma', meaning: '柱頭'},
  {word: 'whisk', meaning: '素早く運ぶ'},
  {word: 'expedite', meaning: '促進させる'},
  {word: 'rigorously', meaning: '厳密に'},
  {word: 'elsewhere', meaning: 'どこか'},
  {word: 'tetrapods', meaning: '四肢動物'},
  {word: 'rhyniophytes', meaning: 'リニア植物（最も原始的な陸上植物）'},
  {word: 'far removed from ～', meaning: '~とかけ離れている（物理も概念もどちらでも）'},
  {word: 'consistency', meaning: '粘り気'},
  {word: 'Cross sections', meaning: '断面'},
  {word: 'saclike', meaning: '袋状の'},
  {word: 'cavity', meaning: '空洞'},
  {word: 'median', meaning: '中央'},
  {word: 'feeble', meaning: '弱い、脆い'},
  {word: 'locomotion', meaning: '移動'},
  {word: 'flop', meaning: 'バタバタと動く'},
  {word: 'carnivorous', meaning: '肉食'},
  {word: 'herbivores', meaning: '草食'},
  {word: 'omnivorous', meaning: '雑食'},
  {word: 'auxiliary', meaning: '補助の'},
  {word: 'dean', meaning: '学部長'},
  {word: 'ordinance', meaning: '法令'},
  {word: 'conjecture', meaning: '憶測'},
  {word: 'reoriented', meaning: '向きを変えた'},
  {word: 'agile', meaning: '俊敏な'},
  {word: 'level', meaning: '平な'},
  {word: 'trunks', meaning: '頭・手足を除いた胴体部分'},
  {word: 'handy', meaning: '便利な'},
  {word: 'trackways', meaning: '足跡'},
  {word: 'trail', meaning: '痕跡、舗装されてない道'},
  {word: 'existence', meaning: '生活'},
  {word: 'flex', meaning: 'しなる、曲がる'},
  {word: 'spring', meaning: 'ばね'},
  {word: 'gliders', meaning: 'グライダー'}
  ];
  

let currentWordIndex = 0;
let score = 0;
let shuffledWords = [];
let missedWords = []; // 間違えた単語を保存する配列
let selectedWordCount = 0;
let timer = null;
const TIME_PER_QUESTION = 5000; // 5秒

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function getRandomChoices(correctMeaning) {
    const otherMeanings = words
        .filter(w => w.meaning !== correctMeaning)
        .map(w => w.meaning);
    const randomMeanings = shuffleArray(otherMeanings).slice(0, 3);
    return shuffleArray([...randomMeanings, correctMeaning]);
}

function shuffleWords() {
    const allWords = shuffleArray(words);
    if (selectedWordCount > 0) {
        shuffledWords = allWords.slice(0, selectedWordCount);
    } else {
        shuffledWords = allWords;
    }
}

function displayWord() {
    const currentWord = shuffledWords[currentWordIndex];
    document.getElementById('word').textContent = currentWord.word;
    document.getElementById('question-count').textContent = 
        `問題: ${currentWordIndex + 1}/${shuffledWords.length}`;
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    // 既存のタイムバーを削除
    const existingTimerBar = document.querySelector('.timer-bar-container');
    if (existingTimerBar) {
        existingTimerBar.remove();
    }
    
    const choices = getRandomChoices(currentWord.meaning);
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    // 新しいタイムバーを追加
    const timerBarHTML = `
        <div class="timer-bar-container">
            <div class="timer-bar" id="timer-bar"></div>
        </div>
    `;
    choicesContainer.insertAdjacentHTML('beforebegin', timerBarHTML);
    
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice, button));
        choicesContainer.appendChild(button);
    });

    document.getElementById('result').textContent = '';
    
    startTimer();
}

function showResults() {
    const container = document.querySelector('.quiz-container');
    const accuracy = Math.round((score / shuffledWords.length) * 100);
    
    // 一旦HTMLを更新
    container.innerHTML = `
        <h2>テスト結果</h2>
        <div class="result-summary">
            <p>スコア: ${score}/${shuffledWords.length} (${accuracy}%)</p>
        </div>
        ${missedWords.length > 0 ? `
            <div class="missed-words">
                <h3>間違えた単語</h3>
                <div class="missed-words-list">
                    ${missedWords.map(word => `
                        <div class="missed-word-item">
                            <span class="word">${word.word}</span>
                            <span class="meaning">${word.meaning}</span>
                        </div>
                    `).join('')}
                </div>
                <button id="retry-missed" class="retry-btn">
                    間違えた単語でもう一度テストする
                </button>
            </div>
        ` : `
            <div class="perfect-score">
                <p>完璧です！全問正解おめでとうございます！</p>
            </div>
        `}
        <button id="retry-all" class="retry-btn">最初からやり直す</button>
    `;

    // HTMLの更新後にイベントリスナーを設定
    const retryMissedBtn = document.getElementById('retry-missed');
    if (retryMissedBtn) {
        retryMissedBtn.addEventListener('click', () => {
            // quiz-containerを元の状態に戻す
            container.innerHTML = `
                <div class="word-display">
                    <p id="word"></p>
                </div>
                <div class="choices-container" id="choices">
                </div>
                <div class="result" id="result"></div>
                <div class="progress">
                    <span id="score">スコア: 0</span>
                    <span id="question-count">問題: 0/0</span>
                </div>
            `;
            
            shuffledWords = shuffleArray([...missedWords]);
            missedWords = [];
            currentWordIndex = 0;
            score = 0;
            displayWord();
        });
    }

    const retryAllBtn = document.getElementById('retry-all');
    if (retryAllBtn) {
        retryAllBtn.addEventListener('click', () => {
            showHomeScreen(); // 最初からやり直すときはホーム画面に戻る
        });
    }
}

function checkAnswer(selectedAnswer, selectedButton) {
    // タイマーとタイマー関連の要素をクリア
    clearTimeout(timer);
    const timerBar = document.getElementById('timer-bar');
    if (timerBar) {
        timerBar.style.transition = 'none';
        timerBar.style.width = '0';
    }
    
    const correctAnswer = shuffledWords[currentWordIndex].meaning;
    const allButtons = document.querySelectorAll('.choice-btn');
    
    allButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
    });

    if (selectedAnswer === correctAnswer) {
        document.getElementById('result').textContent = '正解！';
        document.getElementById('result').className = 'result correct';
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        document.getElementById('result').textContent = '不正解...';
        document.getElementById('result').className = 'result incorrect';
        missedWords.push(shuffledWords[currentWordIndex]);
    }
    
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    setTimeout(() => {
        currentWordIndex++;
        if (currentWordIndex >= shuffledWords.length) {
            showResults();
        } else {
            displayWord();
        }
    }, 1000);
}

function startTimer() {
    const timerBar = document.getElementById('timer-bar');
    if (!timerBar) return;
    
    timerBar.classList.remove('warning', 'danger');
    timerBar.style.transition = `width ${TIME_PER_QUESTION}ms linear`;
    timerBar.style.width = '100%';
    
    if (timer) {
        clearTimeout(timer);
    }
    
    setTimeout(() => {
        if (timerBar) timerBar.style.width = '0%';
    }, 50);

    setTimeout(() => {
        if (timerBar) timerBar.classList.add('warning');
    }, TIME_PER_QUESTION * 0.6);
    
    setTimeout(() => {
        if (timerBar) timerBar.classList.add('danger');
    }, TIME_PER_QUESTION * 0.8);

    timer = setTimeout(() => {
        const correctAnswer = shuffledWords[currentWordIndex].meaning;
        const allButtons = document.querySelectorAll('.choice-btn');
        
        // 時間切れの場合、すべてのボタンを無効化し、正解を赤色で表示
        allButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.classList.add('incorrect'); // 正解を赤色で表示
            }
        });

        document.getElementById('result').textContent = '時間切れ...';
        document.getElementById('result').className = 'result incorrect';
        missedWords.push(shuffledWords[currentWordIndex]);

        setTimeout(() => {
            currentWordIndex++;
            if (currentWordIndex >= shuffledWords.length) {
                showResults();
            } else {
                displayWord();
            }
        }, 1000);
    }, TIME_PER_QUESTION);
}

// ホーム画面の表示関数を追加
function showHomeScreen() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="home-screen">
            <h2>テストする単語数を選んでください</h2>
            <div class="word-count-options">
                <button class="word-count-btn" data-count="10">10単語</button>
                <button class="word-count-btn" data-count="30">30単語</button>
                <button class="word-count-btn" data-count="100">100単語</button>
                <button class="word-count-btn" data-count="0">全部</button>
            </div>
            <p class="total-words">総単語数: ${words.length}語</p>
        </div>
    `;

    // 単語数選択ボタンのイベントリスナーを設定
    const buttons = document.querySelectorAll('.word-count-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectedWordCount = parseInt(button.dataset.count);
            startQuiz();
        });
    });
}

// クイズ開始関数を追加
function startQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="word-display">
            <p id="word"></p>
        </div>
        <div class="choices-container" id="choices">
        </div>
        <div class="result" id="result"></div>
        <div class="progress">
            <span id="score">スコア: 0</span>
            <span id="question-count">問題: 0/0</span>
        </div>
    `;
    
    currentWordIndex = 0;
    score = 0;
    missedWords = [];
    shuffleWords();
    displayWord();
}

// window.onloadを修正
window.onload = () => {
    showHomeScreen();
}; 
