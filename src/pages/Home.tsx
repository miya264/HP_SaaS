import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import AnimatedCounter from '../components/AnimatedCounter';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  BarChart2, 
  Users, 
  Zap, 
  ArrowRight,
  CheckCircle,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = 'InsightSync - AI搭載型ビジネスインテリジェンス';
  }, []);

  return (
    <>
      <Hero 
        title={
          <>
            情報の"ノイズ"を、意思決定の<span className="gradient-text">資産</span>に変える。
          </>
        }
        subtitle="InsightSyncは、社内の会議・チャット・議事録をAIが要約・可視化し、チーム全体の判断をスムーズに導きます。"
        ctaPrimary={{ text: '無料トライアル', link: '/contact' }}
        ctaSecondary={{ text: 'デモを見る', link: '#' }}
      />

      {/* 機能セクション */}
      <Section
        id="features"
        title={<>AI搭載の<span className="gradient-text">先進機能</span></>}
        subtitle="InsightSyncは、組織内のコミュニケーションデータを構造化し、より迅速で的確な意思決定を実現します。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<MessageSquare className="h-6 w-6" />}
            title="リアルタイム会議要約"
            description="会議内容を自動で要約し、重要なポイントを逃さず時間を節約します。"
            index={0}
          />
          <FeatureCard
            icon={<BarChart2 className="h-6 w-6" />}
            title="意思決定の可視化"
            description="会話データを視覚的なインサイトに変換し、意思決定とその結果を追跡します。"
            index={1}
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="チーム意識の統一"
            description="合意点と相違点を特定し、チームの方向性を迅速に一致させます。"
            index={2}
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="豊富な連携機能"
            description="Slack、Google Meet、Zoomなど、既存のツールとシームレスに連携。"
            index={3}
          />
          <FeatureCard
            icon={<CheckCircle className="h-6 w-6" />}
            title="タスク管理機能"
            description="会話から自動的にタスクを抽出し、進捗を追跡します。"
            index={4}
          />
          <FeatureCard
            icon={<FileText className="h-6 w-6" />}
            title="カスタムレポート作成"
            description="各ステークホルダーに最適化されたレポートを自動生成します。"
            index={5}
          />
        </div>
      </Section>

      {/* 導入の流れ */}
      <Section
        id="how-it-works"
        title="導入の流れ"
        subtitle="AIを活用した組織のコミュニケーション改革を、3つの簡単なステップで実現します。"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center bg-white rounded-xl p-8 shadow-md"
          >
            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-950">ツール連携</h3>
            <p className="text-gray-600">既存のコミュニケーションツールとの連携を数クリックで完了。</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center bg-white rounded-xl p-8 shadow-md"
          >
            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-950">AI分析</h3>
            <p className="text-gray-600">会話を自動で分析し、重要ポイント、決定事項、タスクを抽出。</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center bg-white rounded-xl p-8 shadow-md"
          >
            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary-950">インサイト活用</h3>
            <p className="text-gray-600">パーソナライズされたダッシュボードで必要な情報にすぐアクセス。</p>
          </motion.div>
        </div>
      </Section>

      {/* 導入効果 */}
      <Section
        id="stats"
        title="導入効果"
        subtitle="InsightSyncは、世界中の組織の意思決定プロセスを改善しています。"
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter
            end={40}
            suffix="%"
            title="会議時間の削減"
          />
          <AnimatedCounter
            end={87}
            suffix="%"
            title="チーム意識の統一"
          />
          <AnimatedCounter
            end={5}
            suffix="倍"
            title="意思決定の迅速化"
          />
          <AnimatedCounter
            end={98}
            suffix="%"
            title="顧客満足度"
          />
        </div>
      </Section>

      {/* お客様の声 */}
      <Section
        id="testimonials"
        title="お客様の声"
        subtitle="InsightSyncを活用している企業様からの評価をご紹介します。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="InsightSyncの導入により、経営会議の時間が40%削減され、より的確な意思決定が可能になりました。"
            author="田中 明子"
            role="最高技術責任者"
            company="テックノバ株式会社"
            index={0}
          />
          <TestimonialCard
            quote="グローバルチームの意識統一が格段に向上し、早期に課題を発見・解決できるようになりました。"
            author="陳 美玲"
            role="オペレーション部長"
            company="グローバルシステムズ"
            index={1}
          />
          <TestimonialCard
            quote="プロダクトマネージャーとして、全ての会議に参加することなく、顧客とチームの声を把握できるようになりました。"
            author="山本 智子"
            role="プロダクトリード"
            company="イノベートソリューションズ"
            index={2}
          />
        </div>
      </Section>

      {/* CTA セクション */}
      <Section
        id="cta"
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
            組織の意思決定を<span className="gradient-text">進化</span>させませんか？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            10日間の無料トライアルを今すぐ開始。クレジットカード不要。
          </p>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            無料で始める
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;