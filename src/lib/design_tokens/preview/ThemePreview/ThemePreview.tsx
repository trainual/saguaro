import { useTheme } from "styled-components";
import ColorRow from "../shared/ColorRow/ColorRow";
import StyleTable, {
  StyleGroupBody,
  StyleGroupHeader,
} from "../shared/StyleTable/StyleTable";

const ThemePreview = () => {
  const { vars } = useTheme();
  return (
    <StyleTable>
      <StyleGroupHeader
        title="Foundation"
        description="Backgrounds, modals, elevated surfaces, icon backgrounds, menu items"
      />
      <StyleGroupBody>
        <ColorRow hex={vars.foundationHover} text="foundation-hover" />
        <ColorRow hex={vars.foundationBase1} text="foundation-base-1" />
        <ColorRow hex={vars.foundationBase2} text="foundation-base-2" />
        <ColorRow hex={vars.foundationBase3} text="foundation-base-3" />
        <ColorRow hex={vars.foundationBase4} text="foundation-base-4" />
        <ColorRow hex={vars.foundationSurface1} text="foundation-surface-1" />
        <ColorRow hex={vars.foundationSurface2} text="foundation-surface-2" />
      </StyleGroupBody>

      <StyleGroupHeader
        title="Border"
        description="Inputs, surfaces, modals, etc"
      />
      <StyleGroupBody>
        <ColorRow hex={vars.borderSurface1} text="border-surface-1" />
        <ColorRow hex={vars.borderSurface2} text="border-surface-2" />
        <ColorRow hex={vars.borderDefault} text="border-default" />
        <ColorRow hex={vars.borderHover} text="border-hover" />
        <ColorRow hex={vars.borderDisabled} text="border-disabled" />
      </StyleGroupBody>

      <StyleGroupHeader
        title="Text"
        description="Text colors that do not use branding"
      />
      <StyleGroupBody>
        <ColorRow hex={vars.textDefault} text="text-default" />
        <ColorRow hex={vars.textSubdued} text="text-subdued" />
        <ColorRow hex={vars.textPlaceholder} text="text-placeholder" />
        <ColorRow hex={vars.textSurface} text="text-surface" />
        <ColorRow hex={vars.textHover} text="text-hover" />
        <ColorRow hex={vars.textDisabled} text="text-disabled" />
      </StyleGroupBody>

      <StyleGroupHeader title="Accent" />
      <StyleGroupBody>
        <ColorRow hex={vars.accentPrimaryDefault} text="accent-primary-default" />
        <ColorRow hex={vars.accentPrimaryHover} text="accent-primary-hover" />
        <ColorRow hex={vars.accentPrimaryPressed} text="accent-primary-pressed" />
        <ColorRow hex={vars.accentPrimaryDisabled} text="accent-primary-disabled" />
        <ColorRow hex={vars.accentSubdued1} text="accent-subdued-1" />
        <ColorRow hex={vars.accentSubdued2} text="accent-subdued-2" />
        <ColorRow hex={vars.accentSubdued3} text="accent-subdued-3" />
        <ColorRow hex={vars.accentSubdued4} text="accent-subdued-4" />
        <ColorRow hex={vars.accentStrong1} text="accent-strong-1" />
        <ColorRow hex={vars.accentStrong2} text="accent-strong-2" />
      </StyleGroupBody>

      <StyleGroupHeader title="State" description="Critical UI States" />
      <StyleGroupBody>
        <ColorRow hex={vars.stateInfo} text="state-info" />
        <ColorRow hex={vars.stateError} text="state-error" />
        <ColorRow hex={vars.stateCaution} text="state-caution" />
        <ColorRow hex={vars.stateSuccess} text="state-success" />
        <ColorRow hex={vars.stateFavorite} text="state-favorite" />

        <ColorRow hex={vars.stateBadgeTrainual} text="state-badge-trainual" />
        <ColorRow hex={vars.stateBadgeInfo} text="state-badge-info" />
        <ColorRow hex={vars.stateBadgeError} text="state-badge-error" />
        <ColorRow hex={vars.stateBadgeCaution} text="state-badge-caution" />
        <ColorRow hex={vars.stateBadgeSuccess} text="state-badge-success" />
        <ColorRow hex={vars.stateBadgeGeneral} text="state-badge-general" />

        <ColorRow hex={vars.stateBackgroundInfo} text="state-background-info" />
        <ColorRow hex={vars.stateBackgroundError} text="state-background-error" />
        <ColorRow hex={vars.stateBackgroundCaution} text="state-background-caution" />
        <ColorRow hex={vars.stateBackgroundSuccess} text="state-background-success" />

        <ColorRow hex={vars.stateHoverInfo} text="state-hover-info" />
        <ColorRow hex={vars.stateHoverError} text="state-hover-error" />
        <ColorRow hex={vars.stateHoverCaution} text="state-hover-caution" />
        <ColorRow hex={vars.stateHoverSuccess} text="state-hover-success" />

        <ColorRow hex={vars.stateCompletionLow} text="state-completion-low" />
        <ColorRow hex={vars.stateCompletionMedium} text="state-completion-medium" />
        <ColorRow hex={vars.stateCompletionHigh} text="state-completion-high" />
        <ColorRow hex={vars.stateCompletionFull} text="state-completion-full" />
      </StyleGroupBody>

      <StyleGroupHeader title="Charts & Graphs" />
      <StyleGroupBody>
        <ColorRow hex={vars.chartBlue1} text="chart-blue-1" />
        <ColorRow hex={vars.chartGreen1} text="chart-green-1" />
        <ColorRow hex={vars.chartGreen2} text="chart-green-2" />
        <ColorRow hex={vars.chartOrange1} text="chart-orange-1" />
        <ColorRow hex={vars.chartRed1} text="chart-red-1" />
        <ColorRow hex={vars.chartRed2} text="chart-red-2" />
        <ColorRow hex={vars.chartRed3} text="chart-red-3" />
      </StyleGroupBody>

      <StyleGroupHeader title="Brand" />
      <StyleGroupBody>
        <ColorRow hex={vars.trainualBrandPurple} text="trainual-brand-purple" />
        <ColorRow hex={vars.trainualBrandGreen} text="trainual-brand-green" />
        <ColorRow hex={vars.trainualBrandYellow} text="trainual-brand-yellow" />
        <ColorRow hex={vars.trainualBrandMagenta} text="trainual-brand-magenta" />
        <ColorRow hex={vars.trainualBrandBlue} text="trainual-brand-blue" />
      </StyleGroupBody>

      <StyleGroupHeader title="Defaults" />
      <StyleGroupBody>
        <ColorRow hex={vars.blueDefault} text="blue-default" />
        <ColorRow hex={vars.greenDefault} text="green-default" />
        <ColorRow hex={vars.magentaDefault} text="magenta-default" />
        <ColorRow hex={vars.neutralDefault} text="neutral-default" />
        <ColorRow hex={vars.orangeDefault} text="orange-default" />
        <ColorRow hex={vars.purpleDefault} text="purple-default" />
        <ColorRow hex={vars.redDefault} text="red-default" />
        <ColorRow hex={vars.yellowDefault} text="yellow-default" />
      </StyleGroupBody>
    </StyleTable>
  );
};

export default ThemePreview;
