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
        <ColorRow hex={vars.trainualBrandPurpleSurfaceLight} text="trainual-brand-purple-surface-light" />
        <ColorRow hex={vars.trainualBrandPurpleSurface} text="trainual-brand-purple-surface" />
        <ColorRow hex={vars.trainualBrandPurpleSubdued} text="trainual-brand-purple-subdued" />
        <ColorRow hex={vars.trainualBrandPurpleMedium} text="trainual-brand-purple-medium" />
        <ColorRow hex={vars.trainualBrandPurpleStrong} text="trainual-brand-purple-strong" />

        <ColorRow hex={vars.trainualBrandGreenSurfaceLight} text="trainual-brand-green-surface-light" />
        <ColorRow hex={vars.trainualBrandGreenSurface} text="trainual-brand-green-surface" />
        <ColorRow hex={vars.trainualBrandGreenSubdued} text="trainual-brand-green-subdued" />
        <ColorRow hex={vars.trainualBrandGreenMedium} text="trainual-brand-green-medium" />
        <ColorRow hex={vars.trainualBrandGreenStrong} text="trainual-brand-green-strong" />

        <ColorRow hex={vars.trainualBrandYellowSurfaceLight} text="trainual-brand-yellow-surface-light" />
        <ColorRow hex={vars.trainualBrandYellowSurface} text="trainual-brand-yellow-surface" />
        <ColorRow hex={vars.trainualBrandYellowSubdued} text="trainual-brand-yellow-subdued" />
        <ColorRow hex={vars.trainualBrandYellowMedium} text="trainual-brand-yellow-medium" />
        <ColorRow hex={vars.trainualBrandYellowStrong} text="trainual-brand-yellow-strong" />

        <ColorRow hex={vars.trainualBrandMagentaSurfaceLight} text="trainual-brand-magenta-surface-light" />
        <ColorRow hex={vars.trainualBrandMagentaSurface} text="trainual-brand-magenta-surface" />
        <ColorRow hex={vars.trainualBrandMagentaSubdued} text="trainual-brand-magenta-subdued" />
        <ColorRow hex={vars.trainualBrandMagentaMedium} text="trainual-brand-magenta-medium" />
        <ColorRow hex={vars.trainualBrandMagentaStrong} text="trainual-brand-magenta-strong" />

        <ColorRow hex={vars.trainualBrandBlueSurfaceLight} text="trainual-brand-blue-surface-light" />
        <ColorRow hex={vars.trainualBrandBlueSurface} text="trainual-brand-blue-surface" />
        <ColorRow hex={vars.trainualBrandBlueSubdued} text="trainual-brand-blue-subdued" />
        <ColorRow hex={vars.trainualBrandBlueMedium} text="trainual-brand-blue-medium" />
        <ColorRow hex={vars.trainualBrandBlueStrong} text="trainual-brand-blue-strong" />
      </StyleGroupBody>

      <StyleGroupHeader
        title="Preview"
        description="Palette preview values. Should only be used for places where the user is picking a color palette."
      />
      <StyleGroupBody>
        <ColorRow hex={vars.previewBluePrimary} text="preview-blue-primary" />
        <ColorRow hex={vars.previewBlueSecondary} text="preview-blue-secondary" />
        <ColorRow hex={vars.previewGreenPrimary} text="preview-green-primary" />
        <ColorRow hex={vars.previewGreenSecondary} text="preview-green-secondary" />
        <ColorRow hex={vars.previewMagentaPrimary} text="preview-magenta-primary" />
        <ColorRow hex={vars.previewMagentaSecondary} text="preview-magenta-secondary" />
        <ColorRow hex={vars.previewNeutralPrimary} text="preview-neutral-primary" />
        <ColorRow hex={vars.previewNeutralSecondary} text="preview-neutral-secondary" />
        <ColorRow hex={vars.previewOrangePrimary} text="preview-orange-primary" />
        <ColorRow hex={vars.previewOrangeSecondary} text="preview-orange-secondary" />
        <ColorRow hex={vars.previewPurplePrimary} text="preview-purple-primary" />
        <ColorRow hex={vars.previewPurpleSecondary} text="preview-purple-secondary" />
        <ColorRow hex={vars.previewRedPrimary} text="preview-red-primary" />
        <ColorRow hex={vars.previewRedSecondary} text="preview-red-secondary" />
        <ColorRow hex={vars.previewYellowPrimary} text="preview-yellow-primary" />
        <ColorRow hex={vars.previewYellowSecondary} text="preview-yellow-secondary" />
      </StyleGroupBody>
    </StyleTable>
  );
};

export default ThemePreview;
