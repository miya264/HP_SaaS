import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedLogos from '../components/AnimatedLogos';
import { 
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
  Zap,
  ChevronRight
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  React.useEffect(() => {
    document.title = '導入事例・お客様の声 - InsightSync';
  }, []);

  const caseStudies = [
    {
      company: 'テックノバ株式会社',
      industry: 'ソフトウェア開発',
      challenge: '5つのタイムゾーンに分散したチームで会議が多発し、情報伝達のギャップや意思決定の遅れが発生していた。',
      solution: 'InsightSyncを導入し、会議要約の自動化と合意形成の可視化を実現。',
      results: [
        { metric: '会議時間', value: '-40%' },
        { metric: '意思決定スピード', value: '+65%' },
        { metric: 'チーム意識統一度', value: '+87%' }
      ],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: {
        text: "InsightSyncの導入でグローバルチームの働き方が大きく変わりました。会議時間が40%削減され、より迅速かつ的確な意思決定が可能に。",
        author: "田中 恵子",
        role: "CTO"
      }
    },
    {
      company: 'ファイナンスフォワード',
      industry: '金融サービス',
      challenge: 'コンプライアンス要件により、全ての意思決定の詳細な記録が必要で、管理負担が大きかった。',
      solution: 'InsightSyncで会議結果と意思決定の記録を自動化。',
      results: [
        { metric: '記録作成時間', value: '-65%' },
        { metric: 'コンプライアンス信頼度', value: '+92%' },
        { metric: '監査準備時間', value: '-50%' }
      ],
      image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: {
        text: "自動記録機能はコンプライアンス部門にとって画期的です。意思決定の証跡に自信が持てるようになりました。",
        author: "デイビッド・チェン",
        role: "コンプライアンス責任者"
      }
    },
    {
      company: 'ヘルスケアイノベーションズ',
      industry: '医療',
      challenge: '患者ケアの重要な意思決定をシフトや部門を超えて一元管理する必要があった。',
      solution: 'InsightSyncで患者ケアの意思決定を継続的なナレッジベースとして蓄積。',
      results: [
        { metric: '引き継ぎ精度', value: '+78%' },
        { metric: 'ケア連携度', value: '+54%' },
        { metric: '記録作成時間', value: '-35%' }
      ],
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: {
        text: "引き継ぎ精度が向上し、患者様へのケアがより一貫したものになりました。現場にとって大きな変革です。",
        author: "サラ・ジョンソン",
        role: "臨床ディレクター"
      }
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section
        title="導入事例・お客様の声"
        subtitle="各社の意思決定改革事例をご紹介します。"
        className="pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: '150+', label: '導入企業数' },
            { number: '40%', label: '会議時間削減率' },
            { number: '87%', label: 'チーム意識統一度' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center"
            >
              <p className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <Section
          key={index}
          title=""
          className={index % 2 === 1 ? 'bg-gray-50' : ''}
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {study.industry}
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary-950">{study.company}</h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-950">課題</h3>
                <p className="text-gray-600">{study.challenge}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-950">解決策</h3>
                <p className="text-gray-600">{study.solution}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-950">導入効果</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <p className="text-2xl font-bold text-primary-600">{result.value}</p>
                      <p className="text-sm text-gray-600">{result.metric}</p>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-700 mb-6">
                  "{study.quote.text}"
                  <footer className="mt-2 text-gray-600 not-italic">
                    <span className="font-medium">{study.quote.author}</span>、{study.quote.role}
                  </footer>
                </blockquote>
              </div>
              <Link to="/contact" className="text-primary-600 font-semibold inline-flex items-center hover:text-primary-700">
                貴社の課題もご相談ください
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`order-first ${index % 2 === 1 ? 'lg:order-last' : 'lg:order-first'}`}
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={study.image} 
                  alt={`${study.company}の導入事例`} 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Results Grid */}
      <Section
        title="業界を問わず実感できる成果"
        subtitle="InsightSyncは組織の意思決定に具体的な成果をもたらします。"
        className="bg-primary-950 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-primary-900 rounded-xl p-6 border border-primary-800"
          >
            <div className="bg-primary-700/50 w-12 h-12 rounded-full flex items-center justify-center text-secondary-400 mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">時間削減</h3>
            <p className="text-gray-300 mb-4">
              自動要約と集中した議論で会議時間を35〜50%削減
            </p>
            <p className="text-2xl font-bold text-secondary-400">40%</p>
            <p className="text-sm text-gray-400">平均会議時間削減率</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-primary-900 rounded-xl p-6 border border-primary-800"
          >
            <div className="bg-primary-700/50 w-12 h-12 rounded-full flex items-center justify-center text-secondary-400 mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">意思決定スピード</h3>
            <p className="text-gray-300 mb-4">
              情報整理と合意形成の可視化で意思決定が3〜5倍速く
            </p>
            <p className="text-2xl font-bold text-secondary-400">3.7倍</p>
            <p className="text-sm text-gray-400">平均意思決定スピード向上</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-primary-900 rounded-xl p-6 border border-primary-800"
          >
            <div className="bg-primary-700/50 w-12 h-12 rounded-full flex items-center justify-center text-secondary-400 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">チーム意識統一</h3>
            <p className="text-gray-300 mb-4">
              合意形成の可視化と意思決定の記録でチームの一体感が大幅向上
            </p>
            <p className="text-2xl font-bold text-secondary-400">87%</p>
            <p className="text-sm text-gray-400">チーム意識統一度向上</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-primary-900 rounded-xl p-6 border border-primary-800"
          >
            <div className="bg-primary-700/50 w-12 h-12 rounded-full flex items-center justify-center text-secondary-400 mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">ROI（投資対効果）</h3>
            <p className="text-gray-300 mb-4">
              時間削減と意思決定の質向上で素早くROIを実現
            </p>
            <p className="text-2xl font-bold text-secondary-400">258%</p>
            <p className="text-sm text-gray-400">1年後の平均投資回収率</p>
          </motion.div>
        </div>
      </Section>

      {/* Logos Section */}
      <Section
        title="導入企業"
        subtitle="多くの企業がInsightSyncで意思決定改革を実現しています。"
      >
        <AnimatedLogos />
      </Section>

      {/* CTA Section */}
      <Section
        title=""
        className="bg-gray-50 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-950">
            次は貴社の成功事例を！
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            多くの企業がInsightSyncで意思決定改革を実現しています。まずは無料トライアルやデモでご体験ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary inline-flex items-center">
              無料トライアルを始める
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn btn-secondary inline-flex items-center">
              デモを申し込む
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default CaseStudies;